import React, {useState} from "react";
import Input from "./Input";
import FileBase64 from "react-file-base64";
import {addPinAction} from "../../actions";
import {useDispatch} from "react-redux";

const AddPin = () => {
  const initialState = {
    title: "",
    tags: [],
    selectedFile: ""
  };
  const [pinData, setPinData] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = e => {
    setPinData({...pinData, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    console.log(pinData);
    try {
      dispatch(addPinAction(pinData));
    } catch (error) {
      console.log(`Error occured in addPin jsx file:${error}`);
    }
  };
  return (
    <div className='flex flex-col space-y-3 w-1/2 h-1/2 items-center '>
      <Input
        type='text'
        name='title'
        placeholder='Title'
        handleChange={handleChange}
        value={pinData.title}
      />
      <Input
        type='text'
        name='tags'
        placeholder='Tags'
        handleChange={e => {
          let tags = e.target.value;
          let tagArr = tags.split(",").map(tag => {
            return tag.trim();
          });
          setPinData({...pinData, tags: tagArr});
        }}
        value={pinData.tags}
      />
      <div>
        <FileBase64
          type='file'
          multiple={false}
          onDone={({base64}) => setPinData({...pinData, selectedFile: base64})}
        />
      </div>

      <div className='w-3/4 mt-4'>
        <button
          type='submit'
          onClick={handleSubmit}
          className='py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700'>
          Add Pin
        </button>
      </div>
    </div>
  );
};

export default AddPin;
