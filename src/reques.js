const APIKEY="36c698b06357cdf45de65d68f0dbd2a6";

const requests={
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflix:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchAction:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedy:`/discover/movie?api_key=${APIKEY}&with_genres=35`


}
export default requests