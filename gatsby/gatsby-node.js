import path from "path";
async function turnStoryintoPages({graphql,actions}){
const StorypageTemplate= path.resolve('./src/templates/StoryPage.js');
const {data}=await graphql(`
query MyQuery {
    post:allSanityPost {
      nodes {
        _rawSlug   
      }
    }
  }
`);



data.post.nodes.forEach((post) => {
const slug=post._rawSlug.current;
   actions.createPage({
     path:`story/${post._rawSlug.current}`  ,
     component: StorypageTemplate,
     context: {
         wes:"iscool",
         slug,
     }
   })   
});
}




export async function createPages(params){
await turnStoryintoPages(params)
    

}