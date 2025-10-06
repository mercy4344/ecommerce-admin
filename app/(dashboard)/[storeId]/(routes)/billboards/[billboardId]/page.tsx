import prismadb from "@/lib/prismadb";

const BillboardPage = async ({



  params: { billboardId: String }
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId
    }
  });
  return (
    <div>Existing Billboard: {billboard?.lable}</div>
  );
};

export default BillboardPage;
