


const ItemDetailPage = ({item}) => {

  return (
    <>
      <h3>{item.title}</h3>
      <p>Completed: {`${item.Completed}`}</p>
    </>
 
  );
};

export default ItemDetailPage;
