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
import com.reactapp.core.models.Header;
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
    Header.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/header")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HeaderImpl
    implements Header
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String containerColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorTitle;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("containerColor")
    public String getContainerColor() {
        return containerColor;
    }

    @Override
    @JsonProperty("text")
    public String getText() {
        return text;
    }

    @Override
    @JsonProperty("colorText")
    public String getColorText() {
        return colorText;
    }

    @Override
    @JsonProperty("textTitle")
    public String getTextTitle() {
        return textTitle;
    }

    @Override
    @JsonProperty("colorTitle")
    public String getColorTitle() {
        return colorTitle;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
