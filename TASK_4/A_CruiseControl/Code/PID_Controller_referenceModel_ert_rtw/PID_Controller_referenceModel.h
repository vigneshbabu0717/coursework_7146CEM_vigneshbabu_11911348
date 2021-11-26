/*
 * Home License - for personal use only.  Not for government, academic,
 * research, commercial, or other organizational use.
 *
 * File: PID_Controller_referenceModel.h
 *
 * Code generated for Simulink model 'PID_Controller_referenceModel'.
 *
 * Model version                  : 1.13
 * Simulink Coder version         : 9.6 (R2021b) 14-May-2021
 * C/C++ source code generated on : Fri Nov 26 11:16:05 2021
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. RAM efficiency
 *    2. MISRA C:2012 guidelines
 *    3. Polyspace
 * Validation result: Not run
 */

#ifndef RTW_HEADER_PID_Controller_referenceModel_h_
#define RTW_HEADER_PID_Controller_referenceModel_h_
#ifndef PID_Controller_referenceModel_COMMON_INCLUDES_
#define PID_Controller_referenceModel_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                      /* PID_Controller_referenceModel_COMMON_INCLUDES_ */

#include "PID_Controller_referenceModel_types.h"

/* Macros for accessing real-time model data structure */

/* Block signals and states (default storage) for system '<Root>' */
typedef struct {
  real_T DelayOneStep_DSTATE;          /* '<S2>/Delay One Step' */
  real_T DelayOneStep1_DSTATE;         /* '<S1>/Delay One Step1' */
} DW_PID_Controller_referenceMo_T;

/* External inputs (root inport signals with default storage) */
typedef struct {
  real_T e_k;                          /* '<Root>/e_k' */
} ExtU_PID_Controller_reference_T;

/* External outputs (root outports fed by signals with default storage) */
typedef struct {
  real_T y_k;                          /* '<Root>/y_k' */
} ExtY_PID_Controller_reference_T;

/* Block signals and states (default storage) */
extern DW_PID_Controller_referenceMo_T PID_Controller_referenceMode_DW;

/* External inputs (root inport signals with default storage) */
extern ExtU_PID_Controller_reference_T PID_Controller_referenceModel_U;

/* External outputs (root outports fed by signals with default storage) */
extern ExtY_PID_Controller_reference_T PID_Controller_referenceModel_Y;

/* Model entry point functions */
extern void PID_Controller_referenceModel_initialize(void);
extern void PID_Controller_referenceModel_step(void);

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'PID_Controller_referenceModel'
 * '<S1>'   : 'PID_Controller_referenceModel/D_Controller'
 * '<S2>'   : 'PID_Controller_referenceModel/I_Controller'
 * '<S3>'   : 'PID_Controller_referenceModel/P_Controller'
 */
#endif                         /* RTW_HEADER_PID_Controller_referenceModel_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
