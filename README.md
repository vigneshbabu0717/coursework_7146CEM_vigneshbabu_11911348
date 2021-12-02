# coursework_7146CEM_vigneshbabu_11911348
#### Author: Vignesh Babu Aravamuthan

Coursework contains Tuned PID controllers for Cruise control system, Motor speed control system and report

## File tree structure

```bash

TASK_1
   |-- PID.slx                                      #Original PID Model
   |-- PID_Controller_referenceModel.slx            #Referenced Model
   |-- Parameters.mat                               #Dummy parameters to initialise
TASK_2
   |-- A_CruiseControl
   |   |-- Data
   |   |   |-- CruiseControlTask2_Parameters.mat    #Model Parameters data
   |   |-- Model
   |   |   |-- A_CruiseControl_Task2.slx            #Untuned Model
   |   |-- Scripts
   |   |   |-- PID_Tuning_Script.mlx                #Basic script to tune
   |-- B_MotorSpeed
   |   |-- Data
   |   |   |-- MotorSpeedTask2_Parameters.mat       #Model Parameters data
   |   |-- Model
   |   |   |-- B_MotorSpeed_Task2.slx               #Untuned Model
   |   |-- Scripts
   |   |   |-- PID_Tuning_Script.mlx                #Basic script to tune
TASK_3
   |-- A_CruiseControl
   |   |-- Data
   |   |   |-- CruiseControlTask3_Parameters.mat    #Model Parameters data
   |   |   |-- PID_calibrationValues_Cruise.mat     #Calibrated Kp,Ki,Kd values
   |   |-- Model
   |   |   |-- A_CruiseControl_Task3.slx            #Tuned Model
   |   |-- Scripts
   |   |   |-- PID_Tuning_Script.mlx                #Script to tune PID and generate report
   |-- B_MotorSpeed
   |   |-- Data
   |   |   |-- MotorSpeedTask3_Parameters.mat       #Model Parameters data
   |   |   |-- PID_CalibrationValues_Motor.mat      #Calibrated Kp,Ki,Kd values
   |   |-- Model
   |   |   |-- B_MotorSpeed_Task3.slx               #Tuned Model
   |   |-- Scripts
   |   |   |-- PID_Tuning_Script.mlx                #Script to tune PID and generate report
TASK_4
   |-- A_CruiseControl
   |   |-- Code
   |   |   |-- Code_Generation_Advisor_Report.html          #Code generation report
   |   |   |-- PID_Controller_referenceModel_ert_rtw        #Contains generated .c and .h files
   |   |   |   |-- PID_Controller_referenceModel.c
   |   |   |   |-- PID_Controller_referenceModel.h
   |   |   |   |-- PID_Controller_referenceModel_private.h
   |   |   |   |-- PID_Controller_referenceModel_types.h
   |   |   |   |-- ert_main.c
   |-- B_MotorSpeed
   |   |-- Code
   |   |   |-- Code_Generation_Advisor_Report.html          #Code generation report
   |   |   |-- PID_Controller_referenceModel_ert_rtw        #Contains generated .c and .h files
   |   |   |   |-- PID_Controller_referenceModel.c
   |   |   |   |-- PID_Controller_referenceModel.h
   |   |   |   |-- PID_Controller_referenceModel_private.h
   |   |   |   |-- PID_Controller_referenceModel_types.h
   |   |   |   |-- ert_main.c
TASK_5
   |-- 7146CEM_CourseWork_Report_VigneshBabuAravamuthan.docx  #Final Report

```