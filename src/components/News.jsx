import { Component } from "react";
import NewsItems from "./NewsItem";
import SpinnerLoading from "./SpinnerLoading";
export class News extends Component {
    // article = [{ "source": { "id": "le-monde", "name": "Le Monde" }, "author": "Nathalie Brafman", "title": "Paralympiques 2024 : le rugby fauteuil, comment ça marche ?", "description": "Inventée en 1977, la discipline, que l’on appelait alors « murder ball », est un mélange de basket fauteuil, de hockey et de football américain. Les athlètes s’affronteront du 29 août au 2 septembre aux Jeux paralympiques de Paris.", "url": `https://www.lemonde.fr/sport/article/2024/08/29/paralympiques-2024-le-rugby-fauteuil-comment-ca-marche_6298327_3242.html", "urlToImage": `https://img.lemde.fr/2024/08/26/0/0/6000/4000/1440/960/60/0/c48cbf3_1724687317176-000-33qk2fz.jpg", "publishedAt": "2024-08-29T07:30:11Z", "content": "Lors dun match de la Coupe celtique de rugby fauteuil entre lEcosse et lIrlande, à Edimbourg (Ecosse), le 18 juin 2023. EWAN BOOTMAN / AFP\r\nSport olympique depuis les Jeux de Sydney (Australie) en 20… [+1905 chars]" }, { "source": { "id": "bbc-sport", "name": "BBC Sport" }, "author": null, "title": "Football latest: Transfer updates on Chiesa, Ramsdale, Toney & more plus EFL Cup reaction", "description": "All the latest football news and transfer updates with one day remaining of the summer transfer window, plus reaction to Wednesday's EFL Cup matches.", "url": `http://www.bbc.co.uk/sport/football/live/c70j1j822e0t", "urlToImage": `https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png", "publishedAt": "2024-08-29T06:37:13.3966463Z", "content": "In case you missed it, Liverpool have agreed a deal to sign Juventus winger Federico Chiesa.\r\nThe Reds have agreed a fee of £10m for the Italy international, with a further £2.5m in add-ons based pri… [+369 chars]" }, { "source": { "id": "the-wall-street-journal", "name": "The Wall Street Journal" }, "author": null, "title": "‘Football Is for the Girls’: Meet the NFL’s New Stars", "description": "The breakouts of this NFL season are a distinctly American take on a British export: WAGs, the wives and girlfriends shining as bright as the star players", "url": `https://www.wsj.com/sports/football/nfl-football-wives-girlfriends-simone-biles-alix-earle-brittany-mahomes-dd95e062?mod=hp_featst_pos3", "urlToImage": `https://images.wsj.net/im-987581/social", "publishedAt": "2024-08-29T01:00:00Z", "content": null }, { "source": { "id": "espn", "name": "ESPN" }, "author": "Jordan Raanan", "title": "Giants unretire Ray Flaherty's No. 1 for Malik Nabers - ESPN", "description": "The No. 1 for the Giants, the first number retired in professional football history, will now be worn by wide receiver Malik Nabers, with permission from the family of the late Ray Flaherty.", "url": `https://www.espn.com/nfl/story/_/id/41033613/giants-unretire-ray-flaherty-no-1-malik-nabers", "urlToImage": `https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0426%2Fr1324577_1296x729_16%2D9.jpg", "publishedAt": "2024-08-29T00:29:00Z", "content": "The New York Giants are unretiring the No. 1 for rookie wide receiver Malik Nabers to wear, the team announced Wednesday.\r\nThe sixth overall pick in this year's draft received permission from the fam… [+1211 chars]" }, { "source": { "id": "espn", "name": "ESPN" }, "author": "ESPN Fantasy", "title": "2024 fantasy football cheat sheet: Draft tips, busts and more - ESPN", "description": "All the names we've been talking about in a printable double cheat sheet for your fantasy football draft.", "url": `https://www.espn.com/fantasy/football/insider/story/_/id/40794703/2024-fantasy-football-cheat-sheet-draft-tips-sleepers-busts-more", "urlToImage": `https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0809%2Fr1371135_1296x729_16%2D9.jpg", "publishedAt": "2024-08-24T13:00:00Z", "content": "Aug 24, 2024, 09:00 AM ET\r\nIt's time to start your fantasy football season\r\nCreate a league and customize league size, scoring and rules to play in the league you want to play in.\r\nCreate a league to… [+1142 chars]" }, { "source": { "id": "fox-sports", "name": "Fox Sports" }, "author": null, "title": "National Football League\n     <!----> \n        Five potential Cowboys picks to track at the NFL Draft Combine\n       \n      1 hour ago", "description": null, "url": `http://www.foxsports.com/stories/nfl/five-potential-cowboys-picks-to-track-at-the-nfl-draft-combine", "urlToImage": null, "publishedAt": "2024-02-29T18:37:22.5746516Z", "content": null }, { "source": { "id": "bleacher-report", "name": "Bleacher Report" }, "author": "David Kenyon", "title": "Unique Stats from the 2023 College Football Regular Season", "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…", "url": `https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season", "urlToImage": `https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg", "publishedAt": "2023-12-12T12:00:00Z", "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]" }, { "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" }, "author": null, "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com", "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com", "url": `http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles", "urlToImage": `https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif", "publishedAt": "2020-04-27T07:20:43Z", "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]" }]
    constructor() {
        super();
        console.log("hello");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let API = `https://newsapi.org/v2/top-headlines?apiKey=b2bde7ac500244e59f482511d2ce3d4b&q=rain&page=1&pageSize=${this.props.newsLength}`
        this.setState({loading:true})
         let response = await fetch(API);
         let data = await response.json();
         this.setState({
            articles:data.articles, totalResults:data.totalResults, loading: false
         })
    }
    handleOnpreClick = async() => {
        console.log("previous Clicked");
        let API = `https://newsapi.org/v2/top-headlines?apiKey=b2bde7ac500244e59f482511d2ce3d4b&q=rain&page=${this.state.page - 1}&pageSize=${this.props.newsLength}`
        this.setState({loading:true})
        let response = await fetch(API);
         let data = await response.json();
         
        this.setState({
            page:this.state.page -1,
            articles:data.articles,
            loading: false
        })
    }
    handleOnNextClick = async() => {
       if(this.state.page > Math.ceil(this.state.totalResults/this.props.newsLength)){
        alert("No more Pages ")
       }
        else{
            console.log("NExt Clicked");
        let API = `https://newsapi.org/v2/top-headlines?apiKey=b2bde7ac500244e59f482511d2ce3d4b&q=rain&page=${this.state.page + 1}&pageSize=${this.props.newsLength}`
        this.setState({loading:true})
        let response = await fetch(API);
         let data = await response.json();
         
        this.setState({
            page:this.state.page +1,
            articles:data.articles,
            loading: false
        })
        }
    }
    render() {
        return (
            <div className="container">
                
                <h1 className="text-center my-3">This the Top-News</h1>
  
                {this.state.loading && <SpinnerLoading />}
                <div className="row my-3">
                    {this.state.articles.map((Element) => {
                        return <div key={Element.url} className="col-md-4 my-3">
                            <NewsItems title={(Element.title || "").slice(0, 40)} description={(Element.description || "").slice(0, 100)} imageUrl={Element.urlToImage} Url={Element.url}></NewsItems>
                        </div>
                    })}


                </div>
                <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-dark" disabled={this.state.page <=1} onClick={this.handleOnpreClick}>&larr; Previous</button>
                <button disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.newsLength)} type="button" className="btn btn-dark" onClick={this.handleOnNextClick}>Next: &rarr;</button>
                </div>
            </div>
        );
    }
}
export default News;