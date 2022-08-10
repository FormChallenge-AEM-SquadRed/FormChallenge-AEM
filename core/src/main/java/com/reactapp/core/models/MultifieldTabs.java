/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models;

import java.util.List;
import com.adobe.cq.export.json.ComponentExporter;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code MultifieldTabs} Sling Model used for the {@code reactapp/components/multifield-tabs} component.
 * 
 */
@ConsumerType
public interface MultifieldTabs
    extends ComponentExporter
{


    List<basicTitleModel> getBasicTitle();

    List<basicInputModel> getBasicInput();

    List<basicCheckboxModel> getBasicCheckbox();

    List<basicButtonModel> getBasicButton();

    List<socialTitleModel> getSocialTitle();

    List<socialInputModel> getSocialInput();

    List<socialButtonModel> getSocialButton();

    List<certificatesTitleModel> getCertificatesTitle();

    List<certificatesInputModel> getCertificatesInput();

    List<certificatesMoreModel> getCertificatesMore();

    List<certificatesFinishModel> getCertificatesFinish();

    List<basicTitleModel> getSucessTitle();

    List<sucessTextModel> getSucessText();

    List<sucessButtonModel> getSucessButton();

}
