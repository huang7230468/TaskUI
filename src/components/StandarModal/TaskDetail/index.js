
import React, { PureComponent } from 'react';

import { Card ,Form ,Row ,Col ,Input ,Select} from 'antd' ;


const { Option } = Select;

const fieldLabels = {
  name: '任务名称',
  trigger : '触发器',
  execute : '执行次数',
  cron : '任务表达式' ,
};

@Form.create()
export default class TaskDetail extends PureComponent{
	constructor(props) {
        super(props);

        this.state = {
        };
     }

     render(){

        const { form, dispatch, submitting } = this.props;
        const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
        //自适应配置
         const formItemLayout = {
              labelCol: {
                xs: { span: 24 },
                sm: { span: 7 },
              },
              wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
                md: { span: 10 },
              },
            };

    	return(
                <div>
    			 <Form layout="horizontal" hideRequiredMark>
                    <Form.Item label={fieldLabels.name} {...formItemLayout}>
                      {getFieldDecorator('name', {
                        rules: [{ required: true, message: '请输入任务名称' }],
                      })(
                        <Input placeholder="请输入任务名称" />
                      )}
                    </Form.Item>
                    <Form.Item label={fieldLabels.trigger} {...formItemLayout}>
                      {getFieldDecorator('trigger', {
                        rules: [{ required: true, message: '请选择任务触发器' }],
                      })(
                        <Select placeholder="请选择任务触发器">
                          <Option value="xiao">付晓晓</Option>
                          <Option value="mao">周毛毛</Option>
                        </Select>
                      )}
                    </Form.Item>
                     <Form.Item label={fieldLabels.execute} {...formItemLayout}>
                      {getFieldDecorator('execute', {
                        rules: [{ required: false, message: '请输入执行次数' }],
                      })(
                        <div>
                            <Col span={5}>
                                <Input />
                            </Col> 
                             <Col span={19}>
                                <span>(0或为空代表永久执行)</span>
                            </Col> 
                        </div>
                      )}
                    </Form.Item>
                    <Form.Item label={fieldLabels.cron} {...formItemLayout}>
                       {getFieldDecorator('cron',{
                            rules: [{ required: true, message: '请输入任务表达式' }],
                       })(
                            <div>
                             <Input placeholder="请输入任务表达式" />
                             <span>参考配置<a target="blank" href="http://cron.qqe2.com/">地址</a></span>
                            </div>
                       )}
                    </Form.Item>
                 </Form>

                 
                </div>
    		)
    }


}