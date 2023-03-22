import styled from "styled-components";
import BaseScreen from "../BaseScreen/BaseScreen.js";
import Header from "../Header/Header.js";
import TrendingCard from "../TrendingsSection/TrendingsSection.js";
import { Post } from "../PostCard/Styled.js";
import PostCard from "../PostCard/PostCard.js";
import InsertPost from "../InsertPost/insertPost.js";

export default function PostsMainSection({ title, posts, postsAreChanged, setPostsAreChanged, toggleFollow, isFollowed }) {
    return (
        <BaseScreen>
            <Header withSearch={true}></Header>
            <Main>
                <TitleConteiner isFollowed={isFollowed}>
                    <div>
                        {/* <img src="" alt="" /> */}
                        <h1 data-test="hashtag-title">{title}’s posts</h1>
                    </div>
                    {toggleFollow && <button
                        onClick={() => toggleFollow()}
                        disabled={isFollowed==="waiting"}
                    >
                        {isFollowed === "waiting" ? ". . .": isFollowed? "Unfollow" : "Follow"}
                    </button>}
                </TitleConteiner>
                <Section>
                    <ul>
                        {title === "timeline" && <InsertPost postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged} />}
                        {posts === "carregando" ?
                            <Post>Loading</Post>
                            :
                            posts.length === 0 ?
                                <Post data-test="message">There are no posts yet</Post>
                                :
                                posts.map((el) =>
                                    <PostCard key={el.id} post={el} postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged}>
                                    </PostCard>)
                        }
                    </ul>
                    <TrendingCard postsAreChanged={postsAreChanged} />
                </Section>
            </Main>
        </BaseScreen >
    )
}

const Main = styled.div`
    width:calc(611px + 25px + 301px);
    `
const TitleConteiner = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 10px;
    h1 {
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
    }
    button {
    width: 112px;
    height: 31px;
    background: ${props => props.isFollowed ? 'white' : `#1877F2`};
    border-color:${props => props.isFollowed ? 'white' : `#1877F2`};
    border-radius: 5px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color:${props => props.isFollowed ? `#1877F2` : 'white'};
    &:hover{
        cursor: pointer;
    }
    &:disabled{

        background-color: dimgrey;
        color: linen;
    }
    }

`
const Section = styled.div`
    width:100%;
    margin-top:43px;
    display:flex;
    gap:25px;
`