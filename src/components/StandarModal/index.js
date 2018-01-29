
import React, { PureComponent } from 'react';

import { Modal } from 'antd';

export default class StandarModal extends PureComponent{


	constructor(props) {
        super(props);

        this.state = {

        };
     }
	handleModalVisible (booleanVal){
		if(this.props.handleModalVisible){
			this.props.handleModalVisible(booleanVal);
		}
	}
	handle(){
		if(this.props.handle){
			this.props.handle();
		}
	}
    
    render(){
    	const {title , visible , ItemComponent ,children,footerVal} = this.props ;
    	return(
    			<Modal
		          title={title}
		          visible={visible}
		          onOk={() => this.handle()}
		          onCancel={() => this.handleModalVisible(false)}
		          footer ={footerVal}
		        >
		        	{children}
		        </Modal>
    		)
    }



}