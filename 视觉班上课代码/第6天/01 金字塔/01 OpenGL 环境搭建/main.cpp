#include "GLTools.h"
#include "GLShaderManager.h"
#include "GLFrustum.h"
#include "GLBatch.h"
#include "GLFrame.h"
#include "GLMatrixStack.h"
#include "GLGeometryTransform.h"

#ifdef __APPLE__
#include <glut/glut.h>
#else
#define FREEGLUT_STATIC
#include <GL/glut.h>
#endif

GLShaderManager        shaderManager;  //固定管线管理器
GLMatrixStack        modelViewMatrix; //模型视图堆栈
GLMatrixStack        projectionMatrix; //投影视图堆栈
GLFrame              cameraFrame; //观察者
GLFrame             objectFrame; //世界坐标系frame
GLFrustum            viewFrustum; //投影方式

GLBatch             pyramidBatch; //画金字塔的三角形批次类

//纹理变量，一般使用无符号整型
GLuint              textureID;  // 纹理ID

GLGeometryTransform    transformPipeline;

void ChangeSize(int w,int h){
    
}


void RenderScene(void){
    
}

void LoadTGATexture(const char *szFileName,GLenum minFilter,GLenum magFilter,GLenum wrapMode){
    GLbyte *pBits;
    
    
}


void SpecialKeys(int key,int y,int x){
    
}




void SetupRC(){
    glClearColor(0.7, 0.7, 0.7, 1.0f);
    shaderManager.InitializeStockShaders();
    glEnable(GL_DEPTH_TEST);
    glGenTextures(1, &textureID);
    glBindTexture(GL_TEXTURE_2D, textureID);
    
    
    
    
}



int main(int argc,char * argv[]){
//    gltSetWorkingDirectory(argv[0]);
//    glutInit(&argc, argv);
//    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH | GLUT_STENCIL);
//
//    glutInitWindowSize(800, 600);
//    glutCreateWindow("Pyramid");
//    glutReshapeFunc(ChangeSize);
////    glutSpecialFunc(SpecialKeys);
//    glutSpecialFunc(SpecialKeys);
//
//    glutDisplayFunc(RenderScene);
   
    
    
    
    
    
    
    gltSetWorkingDirectory(argv[0]);
    
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH | GLUT_STENCIL);
    glutInitWindowSize(800, 600);
    glutCreateWindow("Pyramid");
    glutReshapeFunc(ChangeSize);
    glutSpecialFunc(SpecialKeys);

    glutDisplayFunc(RenderScene);
    
    GLenum err = glewInit();
    if (GLEW_OK != err) {
        fprintf(stderr, "GLEW Error: %s\n", glewGetErrorString(err));
        return 1;
    }
    

    SetupRC();

    glutMainLoop();

//    ShutdownRC();
    
    return 0;
}


















