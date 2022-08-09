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

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.certificatesModel;
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
    certificatesModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class certificatesModelImpl
    implements certificatesModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titletext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titlecolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labeltextcertificates;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelcolorcertificates;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholdertextcertificates;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholdercolorcertificates;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputbackgroundcolorcertificates;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelcertificates;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelcolorcertificates;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonbackgroundcolorcertificates;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelcertificates2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelcolorcertificates2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonbackgroundcolorcertificates2;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("titletext")
    public String getTitletext() {
        return titletext;
    }

    @Override
    @JsonProperty("titlecolor")
    public String getTitlecolor() {
        return titlecolor;
    }

    @Override
    @JsonProperty("labeltextcertificates")
    public String getLabeltextcertificates() {
        return labeltextcertificates;
    }

    @Override
    @JsonProperty("labelcolorcertificates")
    public String getLabelcolorcertificates() {
        return labelcolorcertificates;
    }

    @Override
    @JsonProperty("placeholdertextcertificates")
    public String getPlaceholdertextcertificates() {
        return placeholdertextcertificates;
    }

    @Override
    @JsonProperty("placeholdercolorcertificates")
    public String getPlaceholdercolorcertificates() {
        return placeholdercolorcertificates;
    }

    @Override
    @JsonProperty("inputbackgroundcolorcertificates")
    public String getInputbackgroundcolorcertificates() {
        return inputbackgroundcolorcertificates;
    }

    @Override
    @JsonProperty("buttonlabelcertificates")
    public String getButtonlabelcertificates() {
        return buttonlabelcertificates;
    }

    @Override
    @JsonProperty("buttonlabelcolorcertificates")
    public String getButtonlabelcolorcertificates() {
        return buttonlabelcolorcertificates;
    }

    @Override
    @JsonProperty("buttonbackgroundcolorcertificates")
    public String getButtonbackgroundcolorcertificates() {
        return buttonbackgroundcolorcertificates;
    }

    @Override
    @JsonProperty("buttonlabelcertificates2")
    public String getButtonlabelcertificates2() {
        return buttonlabelcertificates2;
    }

    @Override
    @JsonProperty("buttonlabelcolorcertificates2")
    public String getButtonlabelcolorcertificates2() {
        return buttonlabelcolorcertificates2;
    }

    @Override
    @JsonProperty("buttonbackgroundcolorcertificates2")
    public String getButtonbackgroundcolorcertificates2() {
        return buttonbackgroundcolorcertificates2;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
