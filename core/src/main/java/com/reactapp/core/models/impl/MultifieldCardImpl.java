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

package com.reactapp.core.models.impl;

import java.util.Collections;
import java.util.List;
import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.MultifieldCard;
import com.reactapp.core.models.basicButtonModel;
import com.reactapp.core.models.basicCheckboxModel;
import com.reactapp.core.models.basicInputModel;
import com.reactapp.core.models.basicTitleModel;
import com.reactapp.core.models.certificatesFinishModel;
import com.reactapp.core.models.certificatesInputModel;
import com.reactapp.core.models.certificatesMoreModel;
import com.reactapp.core.models.certificatesTitleModel;
import com.reactapp.core.models.socialButtonModel;
import com.reactapp.core.models.socialInputModel;
import com.reactapp.core.models.socialTitleModel;
import com.reactapp.core.models.successButtonModel;
import com.reactapp.core.models.successTextModel;
import com.reactapp.core.models.successTitleModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    MultifieldCard.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/multifield-card")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MultifieldCardImpl
    implements MultifieldCard
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String cardColor;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<basicTitleModel> basicTitle;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<basicInputModel> basicInput;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<basicCheckboxModel> basicCheckbox;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<basicButtonModel> basicButton;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<socialTitleModel> socialTitle;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<socialInputModel> socialInput;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<socialButtonModel> socialButton;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<certificatesTitleModel> certificatesTitle;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<certificatesInputModel> certificatesInput;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<certificatesMoreModel> certificatesMore;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<certificatesFinishModel> certificatesFinish;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<successTitleModel> successTitle;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<successTextModel> successText;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<successButtonModel> successButton;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("cardColor")
    public String getCardColor() {
        return cardColor;
    }

    @Override
    public List<basicTitleModel> getBasicTitle() {
        return basicTitle != null ? Collections.unmodifiableList(basicTitle) : null;
    }

    @Override
    public List<basicInputModel> getBasicInput() {
        return basicInput != null ? Collections.unmodifiableList(basicInput) : null;
    }

    @Override
    public List<basicCheckboxModel> getBasicCheckbox() {
        return basicCheckbox != null ? Collections.unmodifiableList(basicCheckbox) : null;
    }

    @Override
    public List<basicButtonModel> getBasicButton() {
        return basicButton != null ? Collections.unmodifiableList(basicButton) : null;
    }

    @Override
    public List<socialTitleModel> getSocialTitle() {
        return socialTitle != null ? Collections.unmodifiableList(socialTitle) : null;
    }

    @Override
    public List<socialInputModel> getSocialInput() {
        return socialInput != null ? Collections.unmodifiableList(socialInput) : null;
    }

    @Override
    public List<socialButtonModel> getSocialButton() {
        return socialButton != null ? Collections.unmodifiableList(socialButton) : null;
    }

    @Override
    public List<certificatesTitleModel> getCertificatesTitle() {
        return certificatesTitle != null ? Collections.unmodifiableList(certificatesTitle) : null;
    }

    @Override
    public List<certificatesInputModel> getCertificatesInput() {
        return certificatesInput != null ? Collections.unmodifiableList(certificatesInput) : null;
    }

    @Override
    public List<certificatesMoreModel> getCertificatesMore() {
        return certificatesMore != null ? Collections.unmodifiableList(certificatesMore) : null;
    }

    @Override
    public List<certificatesFinishModel> getCertificatesFinish() {
        return certificatesFinish != null ? Collections.unmodifiableList(certificatesFinish) : null;
    }

    @Override
    public List<successTitleModel> getSuccessTitle() {
        return successTitle != null ? Collections.unmodifiableList(successTitle) : null;
    }

    @Override
    public List<successTextModel> getSuccessText() {
        return successText != null ? Collections.unmodifiableList(successText) : null;
    }

    @Override
    public List<successButtonModel> getSuccessButton() {
        return successButton != null ? Collections.unmodifiableList(successButton) : null;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
