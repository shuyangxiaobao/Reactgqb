
#include "GLTools.h"	
#include "GLMatrixStack.h"
#include "GLFrame.h"
#include "GLFrustum.h"
#include "GLGeometryTransform.h"
#include "GLBatch.h"

#include <math.h>
#ifdef __APPLE__
#include <glut/glut.h>
#else
#define FREEGLUT_STATIC
#include <GL/glut.h>
#endif

//GLFrame叫参考帧
GLFrame             viewFrame;
GLFrustum           viewFrustum;
GLBatch             tubeBatch;
GLBatch             innerBatch;
//GLMatrixStack 堆栈矩阵
GLMatrixStack       modelViewMatix;
GLMatrixStack       projectionMatrix;

//几何变换的管道
GLGeometryTransform transformPipeline;
GLShaderManager     shaderManager;



// 召唤场景
void RenderScene(void)
{
    // 清屏、深度缓存
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    
    //glEnable(GL_CULL_FACE);
    //开启深度测试
    glEnable(GL_DEPTH_TEST);
    
    //绘制前压栈，将数据保存进去
    modelViewMatix.PushMatrix(viewFrame);
    
    GLfloat vRed[] = { 1.0f, 0.0f, 0.0f, 1.0f };
    GLfloat vGray[] = { 0.75f, 0.75f, 0.75f, 1.0f };
    
    //默认光源着色器
    //参数1：类型
    //参数2：模型视图矩阵
    //参数3：投影矩阵
    //参数4：颜色
    shaderManager.UseStockShader(GLT_SHADER_DEFAULT_LIGHT, transformPipeline.GetModelViewMatrix(), transformPipeline.GetProjectionMatrix(), vRed);
    tubeBatch.Draw();
    
    //默认光源着色器
    //参数1：类型
    //参数2：模型视图矩阵
    //参数3：投影矩阵
    //参数4：颜色
    shaderManager.UseStockShader(GLT_SHADER_DEFAULT_LIGHT, transformPipeline.GetModelViewMatrix(), transformPipeline.GetProjectionMatrix(), vGray);
    innerBatch.Draw();
    
    //绘制完出栈，还原开始的数据
    modelViewMatix.PopMatrix();
    
    
    glutSwapBuffers();
}

//对图形上下文初始化
void SetupRC()
{
    //设置清屏颜色
    glClearColor(0.0f, 0.0f, 0.75f, 1.0f );
    
    //    glEnable(GL_CULL_FACE);
    
    glEnable(GL_DEPTH_TEST);
    
    //初始化着色器管理器
    shaderManager.InitializeStockShaders();
    
//    参数1：表示使用的图元
//    参数2：顶点数
//    参数3：纹理坐标（可选）
    tubeBatch.Begin(GL_QUADS, 200);
    
    float fZ = 100.0f;
    float bZ = -100.0f;
    
    //左面板的颜色、顶点、光照数据
    //颜色值
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    //光照法线
    //接受3个表示坐标的值，指定一条垂直于三角形表面的法线向量
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    //顶点数据
    tubeBatch.Vertex3f(-50.0f, 50.0f, 100.0f);
    
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f,50.0f,fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(50.0f,-50.0f,fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, 35.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, 35.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, 50.0f,fZ);
   
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, -35.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, -35.0f,fZ);

    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 1.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 1.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 1.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 1.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f,50.0f,bZ);

    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, -1.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, -1.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, -1.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, -50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, -1.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, -50.0f, fZ);

    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, -50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, 50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, fZ);

    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f,50.0f,fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(50.0f,-50.0f,fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, 35.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, 35.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, 50.0f,fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, -35.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, -35.0f,fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 1.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 1.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 1.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, 1.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f,50.0f,bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, -1.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, -1.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, -1.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, -50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(0.0f, -1.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, -50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, -50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, 50.0f, fZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, 50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, bZ);
    
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, fZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f,50.0f,bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, -50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-50.0f, -50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-50.0f, 50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(50.0f,-50.0f,bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, -50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, 50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(50.0f, 50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, 50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, 35.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, 35.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, 50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, -35.0f,bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(35.0f, -50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, -50.0f, bZ);
    
    tubeBatch.Normal3f(0.0f, 0.0f, -1.0f);
    tubeBatch.Color4f(1.0f, 0.0f, 0.0f, 1.0f);
    tubeBatch.Vertex3f(-35.0f, -35.0f, bZ);
    
    tubeBatch.End();
    
    //内壁
    innerBatch.Begin(GL_QUADS, 40);
    
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(0.0f, 1.0f, 0.0f);
    innerBatch.Vertex3f(-35.0f, 35.0f, fZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(0.0f, 1.0f, 0.0f);
    innerBatch.Vertex3f(35.0f, 35.0f, fZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(0.0f, 1.0f, 0.0f);
    innerBatch.Vertex3f(35.0f, 35.0f, bZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(0.0f, 1.0f, 0.0f);
    innerBatch.Vertex3f(-35.0f,35.0f,bZ);
    
   
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(0.0f, 1.0f, 0.0f);
    innerBatch.Vertex3f(-35.0f, -35.0f, fZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(0.0f, 1.0f, 0.0f);
    innerBatch.Vertex3f(-35.0f, -35.0f, bZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(0.0f, 1.0f, 0.0f);
    innerBatch.Vertex3f(35.0f, -35.0f, bZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(0.0f, 1.0f, 0.0f);
    innerBatch.Vertex3f(35.0f, -35.0f, fZ);
    
   
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(1.0f, 0.0f, 0.0f);
    innerBatch.Vertex3f(-35.0f, 35.0f, fZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(1.0f, 0.0f, 0.0f);
    innerBatch.Vertex3f(-35.0f, 35.0f, bZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(1.0f, 0.0f, 0.0f);
    innerBatch.Vertex3f(-35.0f, -35.0f, bZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(1.0f, 0.0f, 0.0f);
    innerBatch.Vertex3f(-35.0f, -35.0f, fZ);
    
   
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    innerBatch.Vertex3f(35.0f, 35.0f, fZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    innerBatch.Vertex3f(35.0f, -35.0f, fZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    innerBatch.Vertex3f(35.0f, -35.0f, bZ);
    innerBatch.Color4f(0.75f, 0.75f, 0.75f, 1.0f);
    innerBatch.Normal3f(-1.0f, 0.0f, 0.0f);
    innerBatch.Vertex3f(35.0f, 35.0f, bZ);
    
    innerBatch.End();
    
}

void SpecialKeys(int key, int x, int y)
{
    if(key == GLUT_KEY_UP)
        viewFrame.RotateWorld(m3dDegToRad(-5.0), 1.0f, 0.0f, 0.0f);
    
    if(key == GLUT_KEY_DOWN)
        viewFrame.RotateWorld(m3dDegToRad(5.0), 1.0f, 0.0f, 0.0f);
    
    if(key == GLUT_KEY_LEFT)
        viewFrame.RotateWorld(m3dDegToRad(-5.0), 0.0f, 1.0f, 0.0f);
    
    if(key == GLUT_KEY_RIGHT)
        viewFrame.RotateWorld(m3dDegToRad(5.0), 0.0f, 1.0f, 0.0f);
    //刷新窗口
    glutPostRedisplay();
}


//启动demo，就会调用这个方法
void ChangeSize(int w, int h)
{
    
    if(h == 0)
        h = 1;
    
    // 设置视图窗口的尺寸
    glViewport(0, 0, w, h);
    
    //设置正投影矩阵
    /*
     void SetOrthographic(GLfloat xMin, GLfloat xMax, GLfloat yMin, GLfloat yMax, GLfloat zMin, GLfloat zMax)
     
     */
    viewFrustum.SetOrthographic(-130.0f, 130.0f, -130.0f, 130.0f, -130.0f, 130.0f);
    
    //1.获取投影矩阵 viewFrustum.GetProjectionMatrix()
    //2.将投影矩阵加载到projectionMatrix中
    projectionMatrix.LoadMatrix(viewFrustum.GetProjectionMatrix());
    //设置变换管线以使用两个矩阵堆栈
    transformPipeline.SetMatrixStacks(modelViewMatix, projectionMatrix);
}


int main(int argc, char* argv[])
{
    gltSetWorkingDirectory(argv[0]);
    
    glutInit(&argc, argv);
    //申请一个双缓存区、颜色缓存区、深度缓存区、模板缓存区
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH | GLUT_STENCIL);
    glutInitWindowSize(800, 600);
    glutCreateWindow("Orthographic Projection Example");
    //注册回调函数（改变尺寸）
    glutReshapeFunc(ChangeSize);
    //特殊键位函数（上下左右）
    glutSpecialFunc(SpecialKeys);
     //显示函数
    glutDisplayFunc(RenderScene);
    
    //判断一下是否能初始化glew库，确保项目能正常使用OpenGL 框架
    GLenum err = glewInit();
    if (GLEW_OK != err) {
        fprintf(stderr, "GLEW Error: %s\n", glewGetErrorString(err));
        return 1;
    }
    SetupRC();
    glutMainLoop();
    return 0;
  
}
