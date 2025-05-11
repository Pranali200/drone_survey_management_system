/**
 * Calculate distance between two geo points using Haversine formula
 * @param {Array} coord1 - [lat1, lon1]
 * @param {Array} coord2 - [lat2, lon2]
 * @returns {Number} distance in meters
 */
exports.calculateDistance = (coord1, coord2) => {
    const [lat1, lon1] = coord1;
    const [lat2, lon2] = coord2;
  
    const R = 6371e3; // Radius of Earth in meters
    const toRad = (deg) => (deg * Math.PI) / 180;
  
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  
  /**
   * Generate crosshatch or perimeter waypoint patterns
   * Placeholder for your advanced logic.
   */
  exports.generateWaypoints = (areaGeoJSON, pattern = "crosshatch") => {
    // Dummy response for now
    return [
      [19.07283, 72.88261],
      [19.07290, 72.88275],
      [19.07300, 72.88295],
    ];
  };
  