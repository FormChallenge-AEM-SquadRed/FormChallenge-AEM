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
import com.reactapp.core.models.sucessModel;
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
    sucessModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class sucessModelImpl
    implements sucessModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titletext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titlecolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labeltextsucess;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelcolorsucess;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelsucess;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelcolorsucess;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonbackgroundcolorsucess;
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
    @JsonProperty("labeltextsucess")
    public String getLabeltextsucess() {
        return labeltextsucess;
    }

    @Override
    @JsonProperty("labelcolorsucess")
    public String getLabelcolorsucess() {
        return labelcolorsucess;
    }

    @Override
    @JsonProperty("buttonlabelsucess")
    public String getButtonlabelsucess() {
        return buttonlabelsucess;
    }

    @Override
    @JsonProperty("buttonlabelcolorsucess")
    public String getButtonlabelcolorsucess() {
        return buttonlabelcolorsucess;
    }

    @Override
    @JsonProperty("buttonbackgroundcolorsucess")
    public String getButtonbackgroundcolorsucess() {
        return buttonbackgroundcolorsucess;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
