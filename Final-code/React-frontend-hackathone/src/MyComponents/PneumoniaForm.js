import React from 'react'
import "./CancerForm.css"




const PneumoniaForm = () => {
  return (
    <div class="container">
	<div class="header">
		<h2 style={{textAlign:'center'}}>Enter below details for PNEUMONIA X-RAY classification</h2>
	</div>
	<form id="form" class="form">
		<img src="https://myml-mtapp.herokuapp.com/static/Pneumonia.jpg" width={'300px'} style={{marginLeft:'100px',marginBottom:'50px'}}></img>
		<input type="file"/>




<button>SUBMIT</button>
</form>
</div>
)
}

export default PneumoniaForm