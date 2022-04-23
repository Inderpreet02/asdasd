import React from 'react'
import "./CancerForm.css"




const MalariaForm = () => {
  return (
    <div class="container">
	<div class="header">
		<h2 style={{textAlign:'center'}}>Enter below details for MALARIA prediction</h2>
	</div>
	<form id="form" class="form">
		<img src="https://myml-mtapp.herokuapp.com/static/malaria.jpg" width={'300px'} style={{marginLeft:'100px',marginBottom:'50px'}}></img>
		<input type="file"/>




<button>SUBMIT</button>
</form>
</div>
)
}

export default MalariaForm