import styled from "styled-components";

export const ArticleListWrap=styled.div``

export const AddArticleWrap=styled.div`
  padding: 10px;
	.name{
		font-size: 24px;
    font-weight: 600;
    padding: 10px 0;
	}
	.content-wrap{
		display: flex;
		.left{
      width: 800px;
			.title-wrap{
        margin-bottom: 10px;
			}
		}
		.right{
      width: 400px;
      padding-left: 30px;
			.btn{
        width: 100%;
			}
			.directory{
        width: 100%;
				display: flex;
				.directory-title{
          width: 50px;
				}
			}
			.tag{
        width: 100%;
				display: 100%;
				.tag-title{
          width: 50px;
				}
			}
		}
	}
`
