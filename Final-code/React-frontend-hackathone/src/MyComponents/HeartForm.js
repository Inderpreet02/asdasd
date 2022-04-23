import React from 'react'
import "./CancerForm.css"

const HeartForm = () => {
	

  return (
    <div class="container">
	<div class="header">
		<h2 style={{textAlign:'center'}}>Enter below details for HEART DISEASE prediction</h2>
	</div>
	<form id="form" class="form" >
		<div class="form-control">
			<label for="username">Full Name:</label>
			<input type="text"  id="username" name="fullName" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Age :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Sex(1:Male,0:Female) :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Chest pain type :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Trestbps :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Serum cholestoral in mg/dl :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Restecg :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Thalach :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Exang :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div>   
        <div class="form-control">
			<label for="username">Oldpeak :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div> 
        <div class="form-control">
			<label for="username">Slope :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div> 
        <div class="form-control">
			<label for="username">Thal :</label>
			<input type="text"  id="username" autocomplete="off" />
		
		</div> 

<button>SUBMIT</button>
</form>
</div>
)
}

export default HeartForm