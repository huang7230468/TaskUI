import React, { PureComponent } from 'react';
import StandarTable from '../components/StandardTable/index' ;
import StandarModal from '../components/StandarModal/index' ;
import TaskDetail from '../components/StandarModal/TaskDetail/index' ;

import { Table, Alert, Badge ,Popconfirm, Button } from 'antd';
import moment from 'moment';
import { connect } from 'dva';



const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['禁用', '启动', '删除'];

@connect(
	state => ({
	    tasks : state.tasks, //对应models中的namespace
	  })
)

export default class TaskList  extends PureComponent{

	  constructor(props) {
        super(props);

        this.state = {
         loading :true ,
         ModalVisible_C : false ,
        };
      }

	componentDidMount() {
	    this.props.dispatch({
	      type: 'tasks/list',
	    }).then(() => this.setState({ loading: false }));
	  }
	  onDelete(id){
	  	this.props.dispatch({
	  		type:'tasks/delete',
	  		payload : id ,
	  	})
	  }
	  handleModalVisible (booleanVal){
	  	console.log("booleanVal",booleanVal);
	  		this.setState({ModalVisible_C : booleanVal ,})
	  }
	
	render(){
		const { tasks } = this.props ;
		const {taskList} = tasks ;
		
		const columns = [
	      {
	        title: '任务编号',
	        dataIndex: 'id',
	      },
	      {
	        title: '任务名称',
	        dataIndex: 'name',
	      },
	      {
	        title: '任务描述',
	        dataIndex: 'desc',
	      },
	      {
	        title: '任务调用次数',
	        dataIndex: 'planExeTimes',
	        sorter: true,
	      },
	      {
	        title: '状态',
	        dataIndex: 'state',
	        filters: [
	          {
	            text: status[0],
	            value: 0,
	          },
	          {
	            text: status[1],
	            value: 1,
	          },
	          {
	            text: status[2],
	            value: 2,
	          }
	        ],
	        render(val) {
	          return <Badge status={statusMap[val]} text={status[val]} />;
	        },
	      },
	      {
	        title: '上次执行时间',
	        dataIndex: 'lastExecTime',
	        sorter: true,
	        render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
	      },
	      {
	        title: '操作',
	        render: (record) => (
	          <p>
	            <Popconfirm title="启动?" onConfirm={() => this.onDelete(record.id)}>
		          <Button>启动</Button>
		        </Popconfirm>
		        <Popconfirm title="暂停?" onConfirm={() => this.onDelete(record.id)}>
		          <Button>暂停</Button>
		        </Popconfirm>
		        <Popconfirm title="修改?" onConfirm={() => this.onDelete(record.id)}>
		          <Button>修改</Button>
		        </Popconfirm>
		        <Popconfirm title="删除?" onConfirm={() => this.onDelete(record.id)}>
		          <Button>删除</Button>
		        </Popconfirm>
	          </p>
	        )
	      }
	    ];

		return(

			<div>
			 	<Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>新建</Button>
				<StandarTable columns={columns} dataSource = {taskList} rowKey={record => record.id} />

				<StandarModal
		          title="创建任务"
		          visible={this.state.ModalVisible_C}
		        >
		        	<TaskDetail/>
		        </StandarModal>
			</div>

			)

	}

}