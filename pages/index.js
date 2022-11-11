import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoritos } from "../src/components/Favoritos"

function HomePage(){
    const estiloHomePage = {
            display: "flex",
            flexDirection: "column",
            flex: 1
    };

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return(
        <>
        <CSSReset />
        <div style={estiloHomePage}>
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
            <Header banner={config.banner}/>
            <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
            <Favoritos favs={config.favoritos}/>
        </div>
        </>
    )
}
export default HomePage

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

const StyledBanner = styled.div`
    height: 230px;
    background-image: url(${({bg}) => bg});
    /*background-image: url(${config.bg});*/
    //outra forma de passar a imagem
`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...props}){
    const playlistsNames = Object.keys(props.playlists);

    return(
        <StyledTimeline>
        {playlistsNames.map((playlistName) => {
            const videos = props.playlists[playlistName];
            //console.log(playlistName);
            //console.log(videos);
            return (
                /*<section key={playlistName}>*/ 
                //forma para usar o key
                
                <section key={playlistName}>
                    <h2>{playlistName}</h2>
                    <div>
                        {videos.filter((video) => {
                            const titleNormalized = video.title.toLowerCase();
                            const searchValueNormalized = searchValue.toLowerCase();
                            return titleNormalized.includes(searchValueNormalized)
                        })
                        .map((video) => {
                            return (
                                <a key={video.url} href={video.url}>
                                    <img src={video.thumb} />
                                    <span>
                                        {video.title}
                                    </span>
                                </a>
                            )
                        })}
                    </div>
                </section>
            )
        })}
    </StyledTimeline>
    )
}

function Favoritos(props) {
    const favoritos = Object.keys(props.favs);
    return (
        <StyledFavoritos>
        <div>
            {favoritos.map((favoritosUser)=>{
                const favUsers = props.favs[favoritosUser];
                console.log(favoritosUser);
                return (
                    <section>
                            <h2>{favoritosUser}</h2>
                            <div>
                                {favUsers
                                .map((fav) => {
                                    return (
                                        <a key={fav.git} href={fav.git}> 
                                            <img src={fav.img} />
                                            <span>
                                                {fav.name}
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>

                    </section>
                )
            })}
        </div>

        </StyledFavoritos>
    )
}
