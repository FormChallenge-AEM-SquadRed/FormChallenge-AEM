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
import com.reactapp.core.models.basicButtonModel;
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
    basicButtonModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class basicButtonModelImpl
    implements basicButtonModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelcolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonbckgcolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fonts;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttons;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("buttonlabel")
    public String getButtonlabel() {
        return buttonlabel;
    }

    @Override
    @JsonProperty("buttonlabelcolor")
    public String getButtonlabelcolor() {
        return buttonlabelcolor;
    }

    @Override
    @JsonProperty("buttonbckgcolor")
    public String getButtonbckgcolor() {
        return buttonbckgcolor;
    }

    @Override
    @JsonProperty("fonts")
    public String getFonts() {
        return fonts;
    }

    @Override
    @JsonProperty("buttons")
    public String getButtons() {
        return buttons;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
