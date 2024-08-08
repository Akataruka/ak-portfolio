import Linkbutton from "@/components/Linkbutton";

export const metadata = {
  title: "not-found",
  description: "Created by Asutosh Kataruka",
};

const NotFound = () => {
  return (
    <>
      <div className="mx-auto my-6  p-4">
        <h1 className="text-3xl text-gray-50 font-bold mb-4">Not found</h1>
        <p className="mb-4 text-gray-50">
          The page you're looking for was not found.
        </p>
        <hr className="my-6" />
      </div>
      <Linkbutton title="Back to home" link={"/"} />
    </>
  );
};

export default NotFound;
