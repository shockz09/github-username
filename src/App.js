import axios from "axios";
import {useState} from 'react'

function App() {
 const [data, setData] = useState(false);
 const [username , setUsername] = useState(null)
 const [img , setImg] = useState(null)
 const [about, setAbout] = useState(null)
 const [url , setUrl] = useState(null)
 const [twitter , setTwitter] = useState(null)
 const [following , setFollowing] = useState(null)
 const [followers , setFollowers] = useState(null)
   const onSubmit = (e)=>{
       e.preventDefault();
        const search = document.getElementById("search").value;
        const orignalName = search.split(' ').join('');

        axios.get("https://api.github.com/users/"+orignalName)
        .then(res=>{
           setUsername(res.data.login)
           setImg(res.data.avatar_url) 
           setFollowers(res.data.followers)
           setFollowing(res.data.following)
           setTwitter(res.data.twitter_username)
           setAbout(res.data.bio)
           setUrl(res.data.html_url)
          //   console.log(about)
          //   console.log(url)
          //  console.log(username)
          //   console.log(img)
          //   console.log(followers)
          //   console.log(following)
          //   console.log(twitter)
              
        }
        )
        setData(true)
   }

  return (
    <div className="App">
      <form className="form" onSubmit={onSubmit}>
     <input  id="search" type="text"/>
     <button type="submit" >Submit</button>
     </form>
     {data ? <div><img src={img} /><br/>{username}<br/><br/>{followers}<br/><br/>{following}<br/><br/>{about}<br/><br/>{url}</div> : null}
    </div>
  );
}

export default App;
