const Loading = () => {
  return (
    <div className="relative h-96 bg-backgroundSecondary py-20">
      <div className="absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 transform ">
        <div className="h-64 w-64 animate-spin rounded-full border-8 border-solid border-primaryMedium border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loading;
