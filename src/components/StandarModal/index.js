
import React, { PureComponent } from 'react';

import { Modal } from 'antd';

export default class StandarModal extends PureComponent{


	constructor(props) {
        super(props);

        this.state = {

        };
     }
	handleModalVisible(){

	}
	handleAdd(){

	}
    
    render(){
    	const {title , visible , ItemComponent ,children} = this.props ;
    	console.log("this.props",this.props);

    	return(
    			<Modal
		          title={title}
		          visible={visible}
		          onOk={this.handleAdd}
		          onCancel={() => this.handleModalVisible()}
		        >
		        	{children}
		        </Modal>
    		)
    }



}