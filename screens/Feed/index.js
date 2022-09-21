import React from "react";
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from "react-native";
import options from "../../assets/options.png";
import like from "../../assets/like.png";
import comment from "../../assets/comment.png";

function Feed(){
   const posts = [
      {
         id_post: "1",
         user:{
            author_name:"Pabricio Freitas",
            picture_url:"https://scontent.fval2-1.fna.fbcdn.net/v/t39.30808-6/290900371_3315001705402136_6853997988981993054_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lUweZMevrNEAX8KnpMY&_nc_ht=scontent.fval2-1.fna&oh=00_AT9y9Q6XR294vhIWiqzLqY47DkcmsxSMEldWfq6YCjsNng&oe=632ED2F8"
         },
         picture_url:"https://camo.githubusercontent.com/290428c789b116dbc2d269277c29b537120f917aee2ce99d6e5706b0b1d65229/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f333834302f312a514451766c43673432306c7a52456c434b34415968772e706e67",
        
         likes_count:100,
         description:"Quem disse que não programado em react native kkk",
         comments:[
            {
               id_comment: "1",
               author_name:"Pabricio Freitas",
               picture_url:"",
               comment:"",
            }
         ]
      },
   
   ];

   function renderItem({item: post}){
      return (
         <View>
            <View style={styles.postHeader}> 
               <View style={styles.userInfo}>
                  <Image source={{uri:post.user.picture_url}}  style={styles.userPicture}  />
                  <Text  style={styles.authorName}>{post.user.author_name}</Text>
               </View>
               <View>
                  <TouchableOpacity>
                     <Image source={options}   />
                  </TouchableOpacity>
               </View> 
            </View>

            <View>
               <Text style={styles.description}>{post.description}</Text>
            </View>
            <View>
               <Image source={{uri:post.picture_url}}  style={styles.picture}  />
            </View>

            <View style={styles.footer}>
               <View style={styles.postOptions}>
                  <TouchableOpacity>
                     <Image source={like}/>
                  </TouchableOpacity>
                  <Text  style={styles.authorName}> Likes:{post.likes_count} </Text>
                  <TouchableOpacity>
                     <Image source={comment}/>
                  </TouchableOpacity>
                  <Text  style={styles.authorName}> Comentários:{post.comments.length} </Text>

               </View>
            </View>

         </View>

      );
   }

   return (
      <View>
         <FlatList
            data={posts}
            keyExtractor={(item)=> {item.id}}
            renderItem={renderItem}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   postOptions:{
      flexDirection: "row",
     // justifyContent: "space-between",
 
      alignItems:"center"
   },
   footer:{
      paddingHorizontal : 16,
      paddingTop:8, 
   },
   postHeader:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal:16,
      alignItems:"center"
   },
   userInfo:{
      flexDirection: "row",
  
      
      alignItems:"center"
   },
   picture:{
      width: '100%',
      height:400,
     
   },
   userPicture:{
      marginRight:8,
      borderRadius:30,

      width: 40,
      height:40,
     
   },
   authorName:{
      backgroundColor:"white",
      fontSize:14,
      color:"#000",
      fontWeight:"bold",

   },
   description:{
      paddingHorizontal: 16,
      paddingVertical: 4,
      backgroundColor:"white",
      fontSize:14,
      color:"#000",
      fontWeight:"400",

   },
   
});


export default Feed;