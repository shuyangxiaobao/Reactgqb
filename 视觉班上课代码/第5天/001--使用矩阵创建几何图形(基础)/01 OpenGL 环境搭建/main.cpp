// Objects.cpp
// OpenGL SuperBible, Chapter 4
// Demonstrates GLTools built-in objects
// Program by Richard S. Wright Jr.

#include "GLTools.h"    // OpenGL toolkit
#include "GLMatrixStack.h"
#include "GLFrame.h"
#include "GLFrustum.h"
#include "GLBatch.h"
#include "GLGeometryTransform.h"
#include "StopWatch.h"

#include <math.h>
#ifdef __APPLE__
#include <glut/glut.h>
#else
#define FREEGLUT_STATIC
#include <GL/glut.h>
#endif


GLShaderManager        shaderManager;

GLMatrixStack        modelViewMatrix;//模型视图矩阵
GLMatrixStack        projectionMatrix;//投影矩阵
//观察者位置
GLFrame                cameraFrame;
//世界坐标位置
GLFrame             objectFrame;

//视景体，用来构造投影矩阵
GLFrustum            viewFrustum;

//三角形批次类
GLTriangleBatch     CC_Triangle;

//球
GLTriangleBatch     sphereBatch;
//环
GLTriangleBatch     torusBatch;
//圆柱
GLTriangleBatch     cylinderBatch;
//锥
GLTriangleBatch     coneBatch;
//磁盘
GLTriangleBatch     diskBatch;



GLGeometryTransform    transformPipeline;
M3DMatrix44f        shadowMatrix;


GLfloat vGreen[] = { 0.0f, 1.0f, 0.0f, 1.0f };
GLfloat vBlack[] = { 0.0f, 0.0f, 0.0f, 1.0f };

int nStep = 0;

// 将上下文中，进行必要的初始化
void SetupRC()
{
    // Black background
    glClearColor(0.7f, 0.7f, 0.7f, 1.0f );
    
    //初始化固定着色管理器
    shaderManager.InitializeStockShaders();
    
    //开启深度测试
    glEnable(GL_DEPTH_TEST);
    
    //通过GLGeometryTransform管理矩阵堆栈
    //使用transformPipeline 管道管理模型视图矩阵堆栈 和 投影矩阵堆栈
    transformPipeline.SetMatrixStacks(modelViewMatrix, projectionMatrix);
    
    //将观察者坐标位置Z移动往屏幕里移动15个单位位置
    //表示离屏幕之间的距离 负数，是往屏幕后面移动；正数，往屏幕前面移动
    cameraFrame.MoveForward(-15.0f);
    
    //利用三角形批次类构造图形对象
    // 球
    /*
     gltMakeSphere(GLTriangleBatch& sphereBatch, GLfloat fRadius, GLint iSlices, GLint iStacks);
     参数1：sphereBatch，三角形批次类对象
     参数2：fRadius，球体半径
     参数3：iSlices，从球体底部堆叠到顶部的三角形带的数量；其实球体是一圈一圈三角形带组成
     参数4：iStacks，围绕球体一圈排列的三角形对数
     
     建议：一个对称性较好的球体的片段数量是堆叠数量的2倍，就是iStacks = 2 * iSlices;
     绘制球体都是围绕Z轴，这样+z就是球体的顶点，-z就是球体的底部。
     */
    //Sphere:球
    gltMakeSphere(sphereBatch, 3.0, 10, 20);
    
    // 环面
    /*
     gltMakeTorus(GLTriangleBatch& torusBatch, GLfloat majorRadius, GLfloat minorRadius, GLint numMajor, GLint numMinor);
     参数1：torusBatch，三角形批次类对象
     参数2：majorRadius,甜甜圈中心到外边缘的半径
     参数3：minorRadius,甜甜圈中心到内边缘的半径
     参数4：numMajor,沿着主半径的三角形数量
     参数5：numMinor,沿着内部较小半径的三角形数量
     */
    //    torus  环
    gltMakeTorus(torusBatch, 2.0, 1.0f, 50, 55);
    
    // 圆柱
    /*
     void gltMakeCylinder(GLTriangleBatch& cylinderBatch, GLfloat baseRadius, GLfloat topRadius, GLfloat fLength, GLint numSlices, GLint numStacks);
     参数1：cylinderBatch，三角形批次类对象
     参数2：baseRadius,底部半径
     参数3：topRadius,头部半径
     参数4：fLength,圆形长度
     参数5：numSlices,围绕Z轴的三角形对的数量
     参数6：numStacks,圆柱底部堆叠到顶部圆环的三角形数量
     */
    //    Cylinder  圆柱
    gltMakeCylinder(cylinderBatch, 2.0f, 2.0f, 5.0f, 15, 10);
    
    //锥
    /*
     void gltMakeCylinder(GLTriangleBatch& cylinderBatch, GLfloat baseRadius, GLfloat topRadius, GLfloat fLength, GLint numSlices, GLint numStacks);
     参数1：cylinderBatch，三角形批次类对象
     参数2：baseRadius,底部半径
     参数3：topRadius,头部半径
     参数4：fLength,圆形长度
     参数5：numSlices,围绕Z轴的三角形对的数量
     参数6：numStacks,圆柱底部堆叠到顶部圆环的三角形数量
     */
    //圆柱体，从0开始向Z轴正方向延伸。
    //圆锥体，是一端的半径为0，另一端半径可指定。
    gltMakeCylinder(coneBatch, 2.0f, 0.0f, 3.0f, 13, 4);
    
    // 磁盘
    /*
     void gltMakeDisk(GLTriangleBatch& diskBatch, GLfloat innerRadius, GLfloat outerRadius, GLint nSlices, GLint nStacks);
     参数1:diskBatch，三角形批次类对象
     参数2:innerRadius,内圆半径
     参数3:outerRadius,外圆半径
     参数4:nSlices,圆盘围绕Z轴的三角形对的数量
     参数5:nStacks,圆盘外网到内围的三角形数量
     */
    //   disk 磁盘
    gltMakeDisk(diskBatch, 1.5f, 3.0f, 43, 5);
}


void DrawWireFramedBatch(GLTriangleBatch* pBatch)
{
    //平面着色器，绘制三角形
    //    transformPipeline.GetModelViewProjectionMatrix() 变换管道里面获取我们的模型和投影矩阵
    shaderManager.UseStockShader(GLT_SHADER_FLAT, transformPipeline.GetModelViewProjectionMatrix(), vGreen);
    
    //传过来的参数，对应不同的图形Batch  绘制
        pBatch->Draw();
    
    // 画出黑色轮廓
    glPolygonOffset(-1.0f, -1.0f);
    
    //开启处理线 （开启线段圆滑处理）
    glEnable(GL_LINE_SMOOTH);
    
    //开启混合功能
    glEnable(GL_BLEND);
    
    //颜色混合
    //表示源颜色乘以自身的alpha 值，目标颜色乘以1.0减去源颜色的alpha值，这样一来，源颜色的alpha值越大，则产生的新颜色中源颜色所占比例就越大，而目标颜色所占比例则减 小。这种情况下，我们可以简单的将源颜色的alpha值理解为“不透明度”。这也是混合时最常用的方式。
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    
    //通过程序点大小模式来设置点的大小
    glEnable(GL_POLYGON_OFFSET_LINE);
    
    //多边形模型(背面、线) 将多边形背面设为线框模式
    glPolygonMode(GL_FRONT_AND_BACK, GL_LINE);
    
    //线条宽度
    glLineWidth(2.5f);
    
    //平面着色器绘制线条
    //    GLT_SHADER_FLAT 平面着色器
    shaderManager.UseStockShader(GLT_SHADER_FLAT, transformPipeline.GetModelViewProjectionMatrix(), vBlack);
    
    pBatch->Draw();
    
    // 恢复多边形模式和深度测试
    glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
    glDisable(GL_POLYGON_OFFSET_LINE);
    glLineWidth(1.0f);
    glDisable(GL_BLEND);
    glDisable(GL_LINE_SMOOTH);
}


//召唤场景
void RenderScene(void)
{
    //用当前清除颜色清除窗口背景
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT | GL_STENCIL_BUFFER_BIT);
    
    //模型视图矩阵栈堆，压栈
    modelViewMatrix.PushMatrix();
    //获取摄像头矩阵
    M3DMatrix44f mCamera;
    //从camereaFrame中获取矩阵到mCamera
    cameraFrame.GetCameraMatrix(mCamera);
    //模型视图堆栈的 矩阵与mCamera矩阵 相乘之后，存储到modelViewMatrix矩阵堆栈中
    modelViewMatrix.MultMatrix(mCamera);
    
    //创建矩阵mObjectFrame
    M3DMatrix44f mObjectFrame;
    //从ObjectFrame 获取矩阵到mOjectFrame中
    objectFrame.GetMatrix(mObjectFrame);
    //将modelViewMatrix 的堆栈中的矩阵 与 mOjbectFrame 矩阵相乘，存储到modelViewMatrix矩阵堆栈中
    modelViewMatrix.MultMatrix(mObjectFrame);
    
    //使用平面着色器
    //参数1：类型
    //参数2：通过transformPipeline获取模型视图矩阵
    //参数3：颜色
    shaderManager.UseStockShader(GLT_SHADER_FLAT, transformPipeline.GetModelViewProjectionMatrix(), vBlack);
    
    //判断你目前是绘制第几个图形
    switch(nStep) {
        case 0:
            DrawWireFramedBatch(&sphereBatch);
            break;
        case 1:
            DrawWireFramedBatch(&torusBatch);
            break;
        case 2:
            DrawWireFramedBatch(&cylinderBatch);
            break;
        case 3:
            DrawWireFramedBatch(&coneBatch);
            break;
        case 4:
            DrawWireFramedBatch(&diskBatch);
            break;
    }
    //    出栈
    modelViewMatrix.PopMatrix();
    
    // Flush drawing commands
    glutSwapBuffers();
}


//上下左右，移动图形
void SpecialKeys(int key, int x, int y)
{
    if(key == GLUT_KEY_UP)
        //移动世界坐标系，而不是去移动物体。
        //将世界坐标系在X方向移动-5.0
        objectFrame.RotateWorld(m3dDegToRad(-5.0f), 1.0f, 0.0f, 0.0f);
    
    if(key == GLUT_KEY_DOWN)
        objectFrame.RotateWorld(m3dDegToRad(5.0f), 1.0f, 0.0f, 0.0f);
    
    if(key == GLUT_KEY_LEFT)
        objectFrame.RotateWorld(m3dDegToRad(-5.0f), 0.0f, 1.0f, 0.0f);
    
    if(key == GLUT_KEY_RIGHT)
        objectFrame.RotateWorld(m3dDegToRad(5.0f), 0.0f, 1.0f, 0.0f);
    
    glutPostRedisplay();
}




//点击空格，切换渲染图形
void KeyPressFunc(unsigned char key, int x, int y)
{
    if(key == 32)
    {
        nStep++;
        
        if(nStep > 4)
            nStep = 0;
    }
    
    switch(nStep)
    {
        case 0:
            glutSetWindowTitle("Sphere");
            break;
        case 1:
            glutSetWindowTitle("Torus");
            break;
        case 2:
            glutSetWindowTitle("Cylinder");
            break;
        case 3:
            glutSetWindowTitle("Cone");
            break;
        case 4:
            glutSetWindowTitle("Disk");
            break;
    }
    
    glutPostRedisplay();
}


void ChangeSize(int w, int h)
{
    glViewport(0, 0, w, h);
    
    //透视投影
    viewFrustum.SetPerspective(35.0f, float(w) / float(h), 1.0f, 500.0f);
    
    //projectionMatrix 矩阵堆栈 加载透视投影矩阵
    projectionMatrix.LoadMatrix(viewFrustum.GetProjectionMatrix());
    
    //modelViewMatrix 矩阵堆栈 加载单元矩阵
    modelViewMatrix.LoadIdentity();
}


int main(int argc, char* argv[])
{
    gltSetWorkingDirectory(argv[0]);
    
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH | GLUT_STENCIL);
    glutInitWindowSize(800, 600);
    glutCreateWindow("Sphere");
    glutReshapeFunc(ChangeSize);
    glutKeyboardFunc(KeyPressFunc);
    glutSpecialFunc(SpecialKeys);
    glutDisplayFunc(RenderScene);
    
    GLenum err = glewInit();
    if (GLEW_OK != err) {
        fprintf(stderr, "GLEW Error: %s\n", glewGetErrorString(err));
        return 1;
    }
    
    
    SetupRC();
    
    glutMainLoop();
    return 0;
}
