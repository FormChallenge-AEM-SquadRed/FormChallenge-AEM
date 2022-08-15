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
import com.reactapp.core.models.basicBirthday;
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
    basicBirthday.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class basicBirthdayImpl
    implements basicBirthday
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labeltitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelday;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelmonth;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelyear;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelage;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorinput;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fonts;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("labeltitle")
    public String getLabeltitle() {
        return labeltitle;
    }

    @Override
    @JsonProperty("labeltitle")
    public String getColortitle() {
        return colortitle;
    }

    @Override
    @JsonProperty("labelday")
    public String getLabelday() {
        return labelday;
    }

    @Override
    @JsonProperty("labelmonth")
    public String getLabelmonth() {
        return labelmonth;
    }

    @Override
    @JsonProperty("labelyear")
    public String getLabelyear() {
        return labelyear;
    }

    @Override
    @JsonProperty("labelage")
    public String getLabelage() {
        return labelage;
    }

    @Override
    @JsonProperty("labeltitle")
    public String getColorinput() {
        return colorinput;
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
