/*
 * Home License - for personal use only.  Not for government, academic,
 * research, commercial, or other organizational use.
 *
 * File: PID_Controller_referenceModel.c
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

#include "PID_Controller_referenceModel.h"
#include "PID_Controller_referenceModel_private.h"

/* Block signals and states (default storage) */
DW_PID_Controller_referenceMo_T PID_Controller_referenceMode_DW;

/* External inputs (root inport signals with default storage) */
ExtU_PID_Controller_reference_T PID_Controller_referenceModel_U;

/* External outputs (root outports fed by signals with default storage) */
ExtY_PID_Controller_reference_T PID_Controller_referenceModel_Y;

/* Model step function */
void PID_Controller_referenceModel_step(void)
{
  /* Sum: '<S2>/Add1' incorporates:
   *  Delay: '<S2>/Delay One Step'
   *  Gain: '<S2>/Gain1'
   *  Gain: '<S2>/Gain2'
   *  Inport: '<Root>/e_k'
   */
  PID_Controller_referenceMode_DW.DelayOneStep_DSTATE += (466.0 *
    PID_Controller_referenceModel_U.e_k) * 0.01;

  /* Outport: '<Root>/y_k' incorporates:
   *  Delay: '<S1>/Delay One Step1'
   *  Delay: '<S2>/Delay One Step'
   *  Gain: '<S1>/Gain'
   *  Gain: '<S1>/Gain3'
   *  Gain: '<S3>/Gain'
   *  Inport: '<Root>/e_k'
   *  Sum: '<Root>/Add'
   *  Sum: '<S1>/Sum'
   */
  PID_Controller_referenceModel_Y.y_k = (((PID_Controller_referenceModel_U.e_k -
    PID_Controller_referenceMode_DW.DelayOneStep1_DSTATE) * 295.0) * 100.0) +
    ((5786.7 * PID_Controller_referenceModel_U.e_k) +
     PID_Controller_referenceMode_DW.DelayOneStep_DSTATE);

  /* Update for Delay: '<S1>/Delay One Step1' incorporates:
   *  Inport: '<Root>/e_k'
   */
  PID_Controller_referenceMode_DW.DelayOneStep1_DSTATE =
    PID_Controller_referenceModel_U.e_k;
}

/* Model initialize function */
void PID_Controller_referenceModel_initialize(void)
{
  /* (no initialization code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
