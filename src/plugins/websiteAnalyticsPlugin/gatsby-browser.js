/*
 * Copyright Amazon.com, Inc. or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { AwsRum } from 'aws-rum-web'

export function onClientEntry(_, pluginParams) {
  const APPLICATION_ID = pluginParams.applicationId;
  const APPLICATION_VERSION = pluginParams.applicationVersion;
  const APPLICATION_REGION = pluginParams.region;

  // https://github.com/aws-observability/aws-rum-web/blob/main/docs/configuration.md
  const config = {
    sessionSampleRate: pluginParams.sessionSampleRate,
    guestRoleArn: pluginParams.guestRoleArn,
    identityPoolId: pluginParams.identityPoolId,
    endpoint: pluginParams.endpoint,
    telemetries: pluginParams.telemetries,
    allowCookies: pluginParams.allowCookies,
    enableXRay: pluginParams.enableXRay
  };

  try {
    new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config
      );
    } catch (error) {
      console.debug(error)
    }
  };

