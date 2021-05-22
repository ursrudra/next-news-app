import FeedCard from '../../components/feedcard'
import Paginator from '../../components/paginator'
import {Toolbar} from '../../components/toolbar'
export const Feed = ({pageNumber, articles}) =>{
    return <div className="page-container">
        <Toolbar/>
        <div className="articles-container">
            {
                articles.map((article,index) =>(
                    <FeedCard article={article} key={index}/>
                ))
            }
    </div>
    <div className="pagination-container">
        <Paginator currentPage={pageNumber}/>
    </div>
    </div>
}

export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;

  if(!pageNumber || pageNumber < 1 || pageNumber > 5){
      return {
          props:{
              articles: [],
              pageNumber: 1
          }
      }
  }

  const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
  {
      headers:{
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
  });
  const apiJson = await apiResponse.json();
  const { articles } = apiJson;

  return{
      props:{
          articles,
          pageNumber: Number.parseInt(pageNumber)
      }
  }
}
export default Feed