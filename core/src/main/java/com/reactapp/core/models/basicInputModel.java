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
 * Defines the {@code basicInputModel} Sling Model used for the multifield in {@code reactapp/components/multifield-card} component.
 * 
 */
@ConsumerType
public interface basicInputModel
    extends ComponentExporter
{


    @JsonProperty("labeltext")
    String getLabeltext();

    @JsonProperty("labelcolor")
    String getLabelcolor();

    @JsonProperty("placeholdertext")
    String getPlaceholdertext();

    @JsonProperty("placeholdercolor")
    String getPlaceholdercolor();

    @JsonProperty("textcolor")
    String getTextcolor();

    @JsonProperty("fonts")
    String getFonts();

}
