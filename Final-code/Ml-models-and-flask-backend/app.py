from flask import Flask, jsonify, request, json
import pickle
import numpy as np
import asyncio

# import sklearn
from sklearn import *

model=pickle.load(open('./ML/model/breastcancer_model.pkl','rb'))
app = Flask(__name__)

def ValuePredictor(to_predict_list):
    to_predict = np.array(to_predict_list).reshape(1, 30)
    loaded_model = pickle.load(open("./ML/model/breastcancer_model.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]

@app.route("/members")
def members():
    arr = np.zeros(30, 30)
    
    print(arr)
    return json.dump({arr})

@app.route('/a')
def json_example():
    req = request.get_json()
    
    # arr = np.zeros(30, 30)
    
    # to_predict_list = req.to_dict()
    # to_predict_list = list(to_predict_list.values())
    # to_predict_list = list(map(int, to_predict_list))
    # result = ValuePredictor(to_predict_list)
    
    model=pickle.load(open('./ML/model/breastcancer_model.pkl','rb'))
    
    ar = np.array([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]])
    
    x = np.array([[1, 2, 3], [4, 5, 6]], np.int32)
    
    a = np.arange(30).reshape(1,30) # a 2 by 5 array
    # a = a.reshape(-1, 1)
    ar = ar.reshape(1, -1)
    b = ar.tolist() # nested lists with same data, indices
    c = json.dumps(b);

    prediction = model.predict(c)
    return prediction;

if __name__ == "__main__":
    app.run(debug=True)