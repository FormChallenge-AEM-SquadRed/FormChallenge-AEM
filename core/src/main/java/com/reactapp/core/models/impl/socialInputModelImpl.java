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
import com.reactapp.core.models.socialInputModel;
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
    socialInputModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class socialInputModelImpl
    implements socialInputModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labeltext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelcolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholdertext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholdercolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textcolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fonts;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("labeltext")
    public String getLabeltext() {
        return labeltext;
    }

    @Override
    @JsonProperty("labelcolor")
    public String getLabelcolor() {
        return labelcolor;
    }

    @Override
    @JsonProperty("placeholdertext")
    public String getPlaceholdertext() {
        return placeholdertext;
    }

    @Override
    @JsonProperty("placeholdercolor")
    public String getPlaceholdercolor() {
        return placeholdercolor;
    }

    @Override
    @JsonProperty("textcolor")
    public String getTextcolor() {
        return textcolor;
    }

    @Override
    @JsonProperty("fonts")
    public String getFonts() {
        return fonts;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
