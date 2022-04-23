import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import "./CancerForm.css"

const DiabetesForm = () => {

	const { formData, setFormData, handleChange, sendTransaction } = useContext(TransactionContext);

	const handleSubmit = (e) => {

		e.preventDefault();

		sendTransaction();
	}
  return (
    <div class="container">
	<div class="header">
		<h2 style={{textAlign:'center'}}>Enter below details for DIABETES prediction</h2>
	</div>
	<form id="form" class="form">
		<div class="form-control">
			<label for="username">Full Name:</label>
			<input type="text" name="fullName"  id="username" handleChange={handleChange} autoComplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Pregnancies:</label>
			<input type="text" name="Pregnancies"  handleChange={handleChange} id="username" autoComplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Glucose :</label>
			<input type="text" name="Glucose"  handleChange={handleChange} id="username" autoComplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">BloodPressure :</label>
			<input type="text" name="BloodPressure"  handleChange={handleChange} id="username" autoComplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">SkinThickness :</label>
			<input type="text" name="SkinThickness"  handleChange={handleChange} id="username" autoComplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Insulin :</label>
			<input type="text" name="Insulin"  id="username" handleChange={handleChange} autoComplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">BMI :</label>
			<input type="text" name="BMI" id="username" handleChange={handleChange} autoComplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">DiabetesPedigreeFunction :</label>
			<input type="text"  id="username" name="DiabetesPedigreeFunction" handleChange={handleChange} autoComplete="off" />
		
		</div>
        <div class="form-control">
			<label for="username">Age :</label>
			<input type="text"  id="username" name="Age" handleChange={handleChange} autoComplete="off" />
		
		</div>   

<button onClick={handleSubmit} type="button">SUBMIT</button>
</form>
</div>
)
}

export default DiabetesForm