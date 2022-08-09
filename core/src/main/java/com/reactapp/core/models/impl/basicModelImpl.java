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
import com.reactapp.core.models.basicModel;
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
    basicModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class basicModelImpl
    implements basicModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titletext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titlecolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labeltextbasic;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelcolorbasic;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholdertextbasic;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String placeholdercolorbasic;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String inputbackgroundcolorbasic;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String checkboxtext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String checkboxcolor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelbasic;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonlabelcolorbasic;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonbackgroundcolorbasic;
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
    @JsonProperty("labeltextbasic")
    public String getLabeltextbasic() {
        return labeltextbasic;
    }

    @Override
    @JsonProperty("labelcolorsbasic")
    public String getLabelcolorbasic() {
        return labelcolorbasic;
    }

    @Override
    @JsonProperty("placeholdertextbasic")
    public String getPlaceholdertextbasic() {
        return placeholdertextbasic;
    }

    @Override
    @JsonProperty("placeholdercolorbasic")
    public String getPlaceholdercolorbasic() {
        return placeholdercolorbasic;
    }

    @Override
    @JsonProperty("inputbackgroundcolorbasic")
    public String getInputbackgroundcolorbasic() {
        return inputbackgroundcolorbasic;
    }

    @Override
    @JsonProperty("checkboxtext")
    public String getCheckboxtext() {
        return checkboxtext;
    }

    @Override
    @JsonProperty("checkboxcolor")
    public String getCheckboxcolor() {
        return checkboxcolor;
    }

    @Override
    @JsonProperty("buttonlabelbasic")
    public String getButtonlabelbasic() {
        return buttonlabelbasic;
    }

    @Override
    @JsonProperty("buttonlabelcolorbasic")
    public String getButtonlabelcolorbasic() {
        return buttonlabelcolorbasic;
    }

    @Override
    @JsonProperty("buttonbackgroundcolorbasic")
    public String getButtonbackgroundcolorbasic() {
        return buttonbackgroundcolorbasic;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
