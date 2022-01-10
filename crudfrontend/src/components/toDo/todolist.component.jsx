import { Table, Form, Typography,Button,Space } from 'antd';
// import { Table, Tag, Space, } from 'antd';
import {
  useHistory
 } from "react-router-dom";
 import React,{useEffect,useState} from 'react';
 import {list,Deleteitem} from '../../Service/api';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
         
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  let history = useHistory();
  const [data,setdata] = useState(null);
  const [load,setload] = useState(true);
  const isEditing = (record) => record._id === editingKey;
  useEffect(()=>{

    list().then(response =>{
      console.log(response.data);
      setdata(response.data);
      setload(false)
    })
  },[load])

  const edit = (record) => {
    form.setFieldsValue({
      Name: '',
      Age: 1,
      
      
      ...record,
    });
    setEditingKey(record._id);
  };


  
  const deleteitem = (id) =>{

    console.log(id)
let ide ={
  id:id
}
    Deleteitem(ide).then(response =>{
      console.log(response.data);
      setload(!load);

    })

  }

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      let data ={
        _id:key,
        ...row
      }
     
     
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  let color = null;
  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'Name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Age',
      dataIndex: 'Age',
      width: '15%',
      editable: true,
    },
   
         

        
  
    {
      title: 'Action',
      dataIndex: '_id',
      width: '60%',
      render: (_, record) => {
        const editable = isEditing(record);
        return  (
          <Space >
                   <Typography.Link  onClick={() => history.push(`/edit/${record._id}`)}>

            Edit
          </Typography.Link>
          <Typography.Link  onClick={() => deleteitem(record._id)}>
            Delete
          </Typography.Link>
          <Typography.Link  onClick={() => history.push(`/detail/${record._id}`)}>
            Detail
          </Typography.Link>
          </Space>
        );
      },
    },
    // {
      
    //   dataIndex: '_id',
    //   render: (_, record) => {
         
    //       return(
    //      )
        
    //   },
    // },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
       
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
 

 
  return (
    <div  style={{margin:'2em'}}>
       <div style={{display:'flex',justifyContent:'flex-end',alignItems:'flex-end',margin:'1em'}}>
             <Button type="primary" block  value="small" style={{width:'15%',fontSize:'medium',backgroundColor:'#006B82'}}  onClick={()=> { history.push('/add');}}
               >
              
              + Add task
             </Button>
             
           </div>
    <Form form={form} component={false} style={{border:'1px solid black'}}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        
        loading={load}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
       rowKey={obj=>obj._id}
      />
    </Form>
    
           </div>
  );
};

export default EditableTable; 