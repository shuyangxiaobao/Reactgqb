//
//  main2.cpp
//  01OpenGL
//
//  Created by geqiangbao on 2019/1/30.
//  Copyright © 2019年 Miss CC. All rights reserved.
//

#include "GLShaderManager.h"
#include "GLTools.h"
#include <GLUT/GLUT.h>

GLShaderManager shaderManager;

GLBatch triangleBatch;



int main(int argc, char *argv[]){
    gltSetWorkingDirectory(argv[0]);
    
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH | GLUT_STENCIL);
    glutInitWindowSize(800, 600);
    glutCreateWindow("triangle")
    return 0;
}
