import { useEffect, useState } from 'react';
import { useContextAuth } from '@/hooks/useContextAuth';
import { onValue } from 'firebase/database';
import {
  dbRefMoisture,
  dbRefUserSuggestion,
  dbRefWatering,
  updateWatering,
} from '@/data/firebaseApp';
import { useGarden } from '@/hooks/categoryGarden/useGarden';
import { useLand } from '@/hooks/land/useLand';

export const useHomeViewModel = () => {
  const { user } = useContextAuth();
  const { myGardens } = useGarden();
  const { getMyLandsByCategoryId } = useLand();
  const [moisture, setMoisture] = useState<number>(0);
  const [suggestion, setSuggestion] = useState<string>('');
  const [isWatering, setIsWatering] = useState<boolean>(false);
  const [myLands, setMyLands] = useState<ILand[]>([]);
  const [selectedIdCategoryGarden, setSelectedIdCategoryGarden] = useState<
    number | null
  >(null);

  const handleWatering = () => {
    const uid = user?.uid;
    if (uid != null) {
      updateWatering(uid, !isWatering);
    }
  };

  const handleChangeCategoryGarden = (id: number) => {
    setSelectedIdCategoryGarden(id);
  };

  useEffect(() => {
    const uid = user?.uid;

    if (uid != null) {
      onValue(dbRefMoisture(uid), (snapshot) => {
        const data = snapshot.val();
        if (!!data) {
          setMoisture(data);
        }
      });

      onValue(dbRefWatering(uid), (snapshot) => {
        const data = snapshot.val();
        if (!!data) {
          setIsWatering(data);
        } else {
          setIsWatering(false);
        }
      });

      onValue(dbRefUserSuggestion(uid), (snapshot) => {
        const data = snapshot.val();
        if (!!data) {
          setSuggestion(data);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (myGardens.length > 0) {
      setSelectedIdCategoryGarden(myGardens[0].id);
    }
  }, [myGardens]);

  useEffect(() => {
    if (selectedIdCategoryGarden != null) {
      getMyLandsByCategoryId(selectedIdCategoryGarden).then((res) => {
        setMyLands(res.data || []);
      });
    }
  }, [selectedIdCategoryGarden]);

  return {
    handleWatering,
    suggestion,
    isWatering,
    moisture,
    user,
    myLands,
    myGardens,
    selectedIdCategoryGarden,
    handleChangeCategoryGarden,
  };
};
