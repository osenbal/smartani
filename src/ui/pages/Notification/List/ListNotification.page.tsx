import CardNotification from '@/ui/components/Card/CardNotification';

const ListNotificationPage = () => {
  return (
    <div className="px-[25px] py-5">
      <h2 className="font-semibold">Notifitani</h2>

      <div className="flex flex-col gap-y-4 mt-5">
        <CardNotification
          title="Lorem ipsum dolor sit amet"
          description="Lorem orem ipsum dolor sit amet, consectetur adipiscing elit. Sed orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum dolor sit amet, consectetur adipiscing elit. Sed"
          link="/lahan/1"
        />
      </div>
    </div>
  );
};

export default ListNotificationPage;
