//
//  ViewOne.m
//  Reactgqb
//
//  Created by geqiangbao on 2019/1/2.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "ViewOne.h"
@interface ViewOne ()<RCTBridgeModule>
/** title */
@property(copy,nonatomic)NSString * title;

@end


@implementation ViewOne
RCT_EXPORT_MODULE()

// RN调用原生
RCT_EXPORT_METHOD(changeTitle:(NSString *)title){
  self.title = title;
}
// RN调用原生
RCT_EXPORT_METHOD(ocmethod:(NSString *)title){
  self.title = title;
  [self btnClick];
}



//返回你想要显示的那个View
-(UIView *)view{
  UIView * v = [[UIView alloc]init];
  v.backgroundColor = [UIColor redColor];
  v.frame = [UIScreen mainScreen].bounds;
  
  UILabel * label = [[UILabel alloc]initWithFrame:[UIScreen mainScreen].bounds];
  label.backgroundColor = [UIColor orangeColor];
  label.text = @"这是一个自定义的ViewOne";
  [v addSubview:label];
  
  //添加一个按钮
  UIButton * btn = [[UIButton alloc]init];
  [btn setTitle:@"我是按钮" forState:(UIControlStateNormal)];
  [btn setTitle:@"我被点击了!" forState:(UIControlStateHighlighted)];
  btn.backgroundColor = [UIColor greenColor];
  [btn addTarget:self action:@selector(btnClick) forControlEvents:(UIControlEventTouchUpInside)];
  btn.frame = CGRectMake(100, 100, 150, 150);
  [v addSubview:btn];

  //添加一个按钮
  UIButton * button = [[UIButton alloc]init];
  [button setTitle:@"ios调用RN" forState:(UIControlStateNormal)];
  [button setTitle:@"我被点击了!" forState:(UIControlStateHighlighted)];
  button.backgroundColor = [UIColor greenColor];
  [button addTarget:self action:@selector(click:) forControlEvents:(UIControlEventTouchUpInside)];
  button.frame = CGRectMake(100, 300, 150, 150);
  [v addSubview:button];
  return v;
}

-(void)btnClick{
  UIAlertController * alert = [UIAlertController alertControllerWithTitle:self.title message:@"哥么来了" preferredStyle:(UIAlertControllerStyleAlert)];
  [alert addAction:[UIAlertAction actionWithTitle:@"取消" style:(UIAlertActionStyleCancel) handler:nil]];
  [alert addAction:[UIAlertAction actionWithTitle:@"确认" style:(UIAlertActionStyleDefault) handler:nil]];
  
  //弹窗!!
  [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:alert animated:YES completion:nil];
}
-(void)click:(UIButton *)button{
//  // 原生调用RN
  [self.bridge.eventDispatcher sendAppEventWithName:@"RNnotfication" body:@{@"name":@"xiaoming"}];
}





@end

