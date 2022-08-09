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

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code basicModel} Sling Model used for the multifield in {@code reactapp/components/multifield-tabs} component.
 * 
 */
@ConsumerType
public interface basicModel
    extends ComponentExporter
{


    @JsonProperty("titletext")
    String getTitletext();

    @JsonProperty("titlecolor")
    String getTitlecolor();

    @JsonProperty("labeltextbasic")
    String getLabeltextbasic();

    @JsonProperty("labelcolorsbasic")
    String getLabelcolorbasic();

    @JsonProperty("placeholdertextbasic")
    String getPlaceholdertextbasic();

    @JsonProperty("placeholdercolorbasic")
    String getPlaceholdercolorbasic();

    @JsonProperty("inputbackgroundcolorbasic")
    String getInputbackgroundcolorbasic();

    @JsonProperty("checkboxtext")
    String getCheckboxtext();

    @JsonProperty("checkboxcolor")
    String getCheckboxcolor();

    @JsonProperty("buttonlabelbasic")
    String getButtonlabelbasic();

    @JsonProperty("buttonlabelcolorbasic")
    String getButtonlabelcolorbasic();

    @JsonProperty("buttonbackgroundcolorbasic")
    String getButtonbackgroundcolorbasic();

}
