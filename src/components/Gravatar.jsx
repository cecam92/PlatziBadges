import React from 'react';
import md5 from 'md5';
import Avatar from '../images/16232282.png'

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);
  var url = `https://www.gravatar.com/avatar/${hash}?d=identicon`
 if (email ==='cecam92@hotmail.com'){
url = Avatar;
 }
 //console.log(url);
 
  return (
    <img
      className={props.className}
      src= {
        url
        }
       
      alt="Avatar"
    />
  );
}

export default Gravatar;