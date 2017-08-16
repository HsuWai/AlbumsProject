# AlbumsProject
Sample Application using interceptors in Axios 

# Reference Links
- https://github.com/mzabriskie/axios

# Step
- Create app 
  react-native init AlbumnsProject
  
- Install axios 
  npm install --save axios
  
# Note
- I just implement to test for intercepting before request and after response.
- Before request, intercept to change request's headers.
- After response, intercept to change response's status text.
- src/service/testInterceptor.js is for these interceptions.
