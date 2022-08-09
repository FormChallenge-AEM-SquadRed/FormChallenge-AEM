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
import com.reactapp.core.models.socialModel;
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
    socialModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class socialModelImpl
    implements socialModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titletext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titlecolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labeltextsocial;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelcolorsocial;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholdertextsocial;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholdercolorsocial;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputbackgroundcolorsocial;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelsocial;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelcolorsocial;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonbackgroundcolorsocial;
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
    @JsonProperty("labeltextsocial")
    public String getLabeltextsocial() {
        return labeltextsocial;
    }

    @Override
    @JsonProperty("labelcolorsocial")
    public String getLabelcolorsocial() {
        return labelcolorsocial;
    }

    @Override
    @JsonProperty("placeholdertextsocial")
    public String getPlaceholdertextsocial() {
        return placeholdertextsocial;
    }

    @Override
    @JsonProperty("placeholdercolorsocial")
    public String getPlaceholdercolorsocial() {
        return placeholdercolorsocial;
    }

    @Override
    @JsonProperty("inputbackgroundcolorsocial")
    public String getInputbackgroundcolorsocial() {
        return inputbackgroundcolorsocial;
    }

    @Override
    @JsonProperty("buttonlabelbasic")
    public String getButtonlabelsocial() {
        return buttonlabelsocial;
    }

    @Override
    @JsonProperty("buttonlabelcolorbasic")
    public String getButtonlabelcolorsocial() {
        return buttonlabelcolorsocial;
    }

    @Override
    @JsonProperty("buttonbackgroundcolorsocial")
    public String getButtonbackgroundcolorsocial() {
        return buttonbackgroundcolorsocial;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
