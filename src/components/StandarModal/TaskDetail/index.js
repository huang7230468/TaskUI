
import React, { PureComponent } from 'react';

import { Card ,Form ,Row ,Col ,Input ,Select ,Button} from 'antd' ;

import { connect } from 'dva';


const { Option } = Select;

const fieldLabels = {
  name: '任务名称',
  trigger : '触发器',
  group   : '类名',
  planExeTimes : '执行次数',
  cron : '任务表达式' ,
};

@connect(state => ({
   tasks : state.tasks, //对应models中的namespace
}))
@Form.create()
export default class TaskDetail extends PureComponent{
	constructor(props) {
        super(props);

        this.state = {
          triggers : [1] ,
          group : [1],
        };
     }

     validate = (e) => {
          e.preventDefault();
            this.props.form.validateFieldsAndScroll((error, values) => {
              if (!error) {
                // submit the values
                this.props.dispatch({
                  type: 'tasks/create',
                  payload: values,
                });
              }
            });
          };

     render(){

        const { form, dispatch, tasks:{submitting} } = this.props;
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
          const submitFormLayout = {
              wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 10, offset: 7 },
              },
            };
          const triggerOption = this.state.triggers.map((val)=>{
            return (
                <Option value="taskA">taskA</Option>
              ) 
          });
          const groupOption = this.state.group.map((val)=>{
            return (
                <Option value="com.ant.task.taskDemo">com.ant.task.taskDemo</Option>

              ) 
          })

    	return(
                <div>
        			     <Form 
                    layout="horizontal" 
                    hideRequiredMark
                    onSubmit={this.validate}>
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
                          {triggerOption}
                        </Select>
                      )}
                    </Form.Item>
                    <Form.Item label={fieldLabels.group} {...formItemLayout}>
                      {getFieldDecorator('group', {
                        rules: [{ required: true, message: '请选择类名' }],
                      })(
                        <Select placeholder="请选择类名">
                          {groupOption}
                        </Select>
                      )}
                    </Form.Item>
                     <Form.Item label={fieldLabels.planExeTimes} {...formItemLayout}>
                      {getFieldDecorator('planExeTimes', {
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

                    <Form.Item {...submitFormLayout} style={{ marginTop: 32 }}>
                      <Button type="primary" htmlType="submit" loading={submitting}>
                        提交
                      </Button>
                      <Button style={{ marginLeft: 8 }}>重置</Button>
                    </Form.Item>
                 </Form>

                 
                </div>
    		)
    }


}