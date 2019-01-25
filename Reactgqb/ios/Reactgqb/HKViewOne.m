//
//  HKViewOne.m
//  NavTest
//
//  Created by H on 2017/3/29.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "HKViewOne.h"
#import "TestController.h"
#import "AppDelegate.h"
@interface HKViewOne ()<RCTBridgeModule>
/** title */
@property(copy,nonatomic)NSString * title;

@end


@implementation HKViewOne
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(changeTitle:(NSString *)title){
//    self.title = title;
//  TestController *one = [[TestController alloc]init];
//
//  AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
//
//  [app.nav pushViewController:one animated:YES];
  dispatch_async(dispatch_get_main_queue(), ^{
    //    self.title = title;
    //  TestController *one = [[TestController alloc]init];
    //
    //  AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    //
    //  [app.nav pushViewController:one animated:YES];
    [self btnClick];

  });
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
  return v;
}

-(void)btnClick{
  UIAlertController * alert = [UIAlertController alertControllerWithTitle:self.title message:@"哥么来了2" preferredStyle:(UIAlertControllerStyleAlert)];
  [alert addAction:[UIAlertAction actionWithTitle:@"取消" style:(UIAlertActionStyleCancel) handler:nil]];
  [alert addAction:[UIAlertAction actionWithTitle:@"确认" style:(UIAlertActionStyleDefault) handler:nil]];
  
  //弹窗!!
  [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:alert animated:YES completion:nil];
}



@end
