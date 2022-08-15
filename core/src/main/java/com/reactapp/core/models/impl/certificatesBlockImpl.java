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
import com.reactapp.core.models.certificatesBlock;
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
    certificatesBlock.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class certificatesBlockImpl
    implements certificatesBlock
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
    private String btncertificateslabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String btnmorelabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String btnlabelcolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String btnbckgcolor;
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
    @JsonProperty("btncertificateslabel")
    public String getBtncertificateslabel() {
        return btncertificateslabel;
    }

    @Override
    @JsonProperty("btnmorelabel")
    public String getBtnmorelabel() {
        return btnmorelabel;
    }

    @Override
    @JsonProperty("btnlabelcolor")
    public String getBtnlabelcolor() {
        return btnlabelcolor;
    }

    @Override
    @JsonProperty("btnbckgcolor")
    public String getBtnbckgcolor() {
        return btnbckgcolor;
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
